# Servidor estatico minimo para probar Rondo en local (sin instalar nada).
# Uso: powershell -ExecutionPolicy Bypass -File .claude/serve.ps1 [puerto]
param([int]$Port = 8080)

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$mime = @{
    '.html' = 'text/html; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
    '.css' = 'text/css; charset=utf-8'; '.json' = 'application/json; charset=utf-8'
    '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.gif' = 'image/gif'
    '.svg' = 'image/svg+xml'; '.ico' = 'image/x-icon'; '.webp' = 'image/webp'
    '.webmanifest' = 'application/manifest+json'; '.xml' = 'application/xml'; '.txt' = 'text/plain; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Rondo en http://localhost:$Port/  (Ctrl+C para parar)"

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $res = $ctx.Response
        try {
            $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
            if ($path -eq '') { $path = 'index.html' }
            $file = [IO.Path]::GetFullPath((Join-Path $root $path))
            if ($file.StartsWith($root) -and (Test-Path $file -PathType Leaf)) {
                $bytes = [IO.File]::ReadAllBytes($file)
                $ext = [IO.Path]::GetExtension($file).ToLower()
                $res.ContentType = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
                $res.Headers.Add('Cache-Control', 'no-store')
                $res.ContentLength64 = $bytes.Length
                if ($ctx.Request.HttpMethod -ne 'HEAD') { $res.OutputStream.Write($bytes, 0, $bytes.Length) }
            } else {
                $res.StatusCode = 404
            }
            Write-Host "$($res.StatusCode) /$path"
        } catch {
            Write-Host "Error en /$path : $_"
        } finally {
            $res.Close()
        }
    }
} finally {
    $listener.Stop()
}

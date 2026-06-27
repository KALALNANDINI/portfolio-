[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$srcFolder = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"
$destFolder = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"

$files = @{
    "residence_hq_1.png" = "residence_thumb.jpg"
    "housing_hq_1.png" = "housing_thumb.jpg"
    "vocational_hq_1.png" = "vocational_thumb.jpg"
    "measure_hq_1.png" = "measure_thumb.jpg"
    "office_hq_1.png" = "office_thumb.jpg"
    "internship_hq_2.jpg" = "internship_thumb.jpg"
    "detailing_hq_1.png" = "detailing_thumb.jpg"
    "comp_hq_2.png" = "competition_thumb.jpg"
    "natiya_3.png" = "miscellaneous_thumb.jpg"
}

function Create-Thumbnail($srcName, $destName) {
    $srcPath = Join-Path $srcFolder $srcName
    $destPath = Join-Path $destFolder $destName
    
    if (-not (Test-Path $srcPath)) {
        Write-Host "Source file not found: $srcPath"
        return
    }
    
    Write-Host "Resizing $srcName to $destName..."
    $img = [System.Drawing.Image]::FromFile($srcPath)
    
    $newWidth = 600
    $newHeight = [int]($img.Height * ($newWidth / $img.Width))
    
    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # High-quality scaling settings
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
    $g.Dispose()
    
    # Save as JPEG with 85% quality compression
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)
    
    $bmp.Save($destPath, $codec, $encoderParams)
    $bmp.Dispose()
    $img.Dispose()
    
    $size = (Get-Item $destPath).Length
    Write-Host "Created: $destName ($([Math]::Round($size / 1024, 1)) KB)"
}

foreach ($src in $files.Keys) {
    $dest = $files[$src]
    Create-Thumbnail $src $dest
}

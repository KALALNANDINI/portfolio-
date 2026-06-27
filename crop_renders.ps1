[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$srcFolder = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"
$destFolder = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"

# Crop definitions for high quality files
# Format: SourceFile, DestFile, CropX, CropY, CropWidth, CropHeight, TargetWidth
$crops = @(
    # Residence: Crop left render
    @{ src="residence_hq_1.png"; dest="residence_thumb.jpg"; x=100; y=100; w=2300; h=2140; tw=600 }
    
    # Housing: Crop left render
    @{ src="housing_hq_1.png"; dest="housing_thumb.jpg"; x=100; y=100; w=2300; h=2140; tw=600 }
    
    # Vocational: Crop left render
    @{ src="vocational_hq_1.png"; dest="vocational_thumb.jpg"; x=100; y=100; w=2300; h=2140; tw=600 }
    
    # Measure Drawing: Crop left drawing
    @{ src="measure_hq_1.png"; dest="measure_thumb.jpg"; x=100; y=100; w=2300; h=2140; tw=600 }
    
    # Office Work: No text column, just resize whole image
    @{ src="office_hq_1.png"; dest="office_thumb.jpg"; x=-1; y=-1; w=-1; h=-1; tw=600 }
    
    # Internship: Resize whole sheet
    @{ src="internship_hq_2.jpg"; dest="internship_thumb.jpg"; x=-1; y=-1; w=-1; h=-1; tw=600 }
    
    # Detailing: Resize whole sheet
    @{ src="detailing_hq_1.png"; dest="detailing_thumb.jpg"; x=-1; y=-1; w=-1; h=-1; tw=600 }
    
    # Competition: Crop top render
    @{ src="comp_hq_2.png"; dest="competition_thumb.jpg"; x=0; y=0; w=1414; h=1100; tw=600 }
    
    # Miscellaneous: Crop top duplex render from the massive sheet
    @{ src="natiya_3.png"; dest="miscellaneous_thumb.jpg"; x=0; y=0; w=10514; h=6500; tw=600 }
)

function Process-Image($item) {
    $srcPath = Join-Path $srcFolder $item.src
    $destPath = Join-Path $destFolder $item.dest
    
    if (-not (Test-Path $srcPath)) {
        Write-Host "Source not found: $srcPath"
        return
    }
    
    Write-Host "Processing $($item.src) -> $($item.dest)..."
    $img = [System.Drawing.Image]::FromFile($srcPath)
    
    # Determine source rectangle
    $srcX = if ($item.x -ge 0) { $item.x } else { 0 }
    $srcY = if ($item.y -ge 0) { $item.y } else { 0 }
    $srcW = if ($item.w -gt 0) { $item.w } else { $img.Width }
    $srcH = if ($item.h -gt 0) { $item.h } else { $img.Height }
    
    # Calculate thumbnail target height maintaining cropped aspect ratio
    $targetWidth = $item.tw
    $targetHeight = [int]($srcH * ($targetWidth / $srcW))
    
    $bmp = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    # Draw cropped image scaled to target thumbnail size
    $srcRect = New-Object System.Drawing.Rectangle($srcX, $srcY, $srcW, $srcH)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $targetWidth, $targetHeight)
    
    $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    # Save as JPEG with 85% quality compression
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)
    
    $bmp.Save($destPath, $codec, $encoderParams)
    $bmp.Dispose()
    $img.Dispose()
    
    $size = (Get-Item $destPath).Length
    Write-Host "Successfully created $($item.dest) ($([Math]::Round($size / 1024, 1)) KB)"
}

foreach ($item in $crops) {
    Process-Image $item
}

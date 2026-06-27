[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$folder = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"
Get-ChildItem $folder -Filter "*hq*" | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Host "$($_.Name) : Width=$($img.Width), Height=$($img.Height)"
    $img.Dispose()
}
Get-ChildItem $folder -Filter "natiya*" | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Host "$($_.Name) : Width=$($img.Width), Height=$($img.Height)"
    $img.Dispose()
}

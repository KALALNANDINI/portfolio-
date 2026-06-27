$brain = "C:\Users\Owner\.gemini\antigravity\brain\9edbe944-037b-49d4-91a4-6b6157483e39"
$dest = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"

Copy-Item (Join-Path $brain "media__1781274090900.jpg") (Join-Path $dest "cert_squelette.jpg") -Force
Copy-Item (Join-Path $brain "media__1781274090910.jpg") (Join-Path $dest "cert_iia_kep_2025.jpg") -Force
Copy-Item (Join-Path $brain "media__1781274090916.jpg") (Join-Path $dest "cert_nasa_2023.jpg") -Force
Copy-Item (Join-Path $brain "media__1781274090932.jpg") (Join-Path $dest "cert_iia_kep_2024.jpg") -Force
Copy-Item (Join-Path $brain "media__1781274091009.jpg") (Join-Path $dest "cert_aya_studio.jpg") -Force

Write-Output "Certificates copied:"
Get-ChildItem (Join-Path $dest "cert_*") | Select-Object Name, Length

$brain = "C:\Users\Owner\.gemini\antigravity\brain\9edbe944-037b-49d4-91a4-6b6157483e39"
$dest = "C:\Users\Owner\.gemini\antigravity\scratch\nandini-portfolio\assets\images"

Copy-Item (Join-Path $brain "media__1781275411333.jpg") (Join-Path $dest "cert_iia_kep_2023.jpg") -Force
Copy-Item (Join-Path $brain "media__1781275414939.jpg") (Join-Path $dest "cert_vigyan_2022.jpg") -Force
Copy-Item (Join-Path $brain "media__1781275418376.jpg") (Join-Path $dest "cert_coa_msme_2026.jpg") -Force

Write-Output "Certificates copied:"
Get-ChildItem (Join-Path $dest "cert_*") | Select-Object Name, Length

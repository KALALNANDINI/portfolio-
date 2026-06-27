$path = "C:\Users\Owner\.gemini\antigravity\brain\9edbe944-037b-49d4-91a4-6b6157483e39\.system_generated\logs\transcript_full.jsonl"
if (!(Test-Path $path)) {
    Write-Host "Transcript not found"
    exit
}

$lines = Get-Content $path
foreach ($line in $lines) {
    if ($line -like "*project_residence.png*") {
        try {
            $obj = ConvertFrom-Json $line -ErrorAction SilentlyContinue
            Write-Host "Step $($obj.step_index): found project_residence.png"
            if ($obj.tool_calls) {
                foreach ($tc in $obj.tool_calls) {
                    Write-Host "  Tool: $($tc.name)"
                    if ($tc.name -eq "run_command") {
                        Write-Host "    CmdLine: $($tc.args.CommandLine)"
                    }
                }
            }
        } catch {}
    }
}

$baseDir = "assets/images/icons/tech"
$azureUrl = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"

echo "Downloading Azure from Wikimedia..."
try {
    Invoke-WebRequest -Uri $azureUrl -OutFile "$baseDir/azure.svg"
    $content = Get-Content "$baseDir/azure.svg" -Raw
    # Replace all fills with white
    $content = $content -replace 'fill="[^"]*"', 'fill="#FFFFFF"'
    # Also remove style attributes that might set fill
    $content = $content -replace 'style="[^"]*fill:[^;"]*;[^"]*"', 'style="fill:#FFFFFF"'
    Set-Content -Path "$baseDir/azure.svg" -Value $content
    echo "Azure Success"
}
catch {
    echo "Azure Fail: $_"
}

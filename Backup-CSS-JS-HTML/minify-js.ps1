# JavaScript Minification Script
$inputFile = "cds-website/assets/js/combined.js"
$outputFile = "cds-website/assets/js/main.min.js"

# Read the JavaScript file
$js = Get-Content $inputFile -Raw

# Remove multi-line comments /* ... */
$js = $js -replace '/\*[\s\S]*?\*/', ''

# Remove single-line comments // but preserve URLs (http://, https://)
$js = $js -replace '(?<!:)//.*', ''

# Remove extra whitespace and newlines (but preserve necessary spaces)
$js = $js -replace '\s+', ' '

# Remove spaces around operators and punctuation
$js = $js -replace '\s*{\s*', '{'
$js = $js -replace '\s*}\s*', '}'
$js = $js -replace '\s*\(\s*', '('
$js = $js -replace '\s*\)\s*', ')'
$js = $js -replace '\s*;\s*', ';'
$js = $js -replace '\s*,\s*', ','
$js = $js -replace '\s*=\s*', '='
$js = $js -replace '\s*:\s*', ':'

# Trim
$js = $js.Trim()

# Write minified JavaScript
$js | Out-File $outputFile -Encoding UTF8 -NoNewline

# Show file sizes
Write-Host "`nOriginal size: $([math]::Round((Get-Item $inputFile).Length/1KB, 2)) KB"
Write-Host "Minified size: $([math]::Round((Get-Item $outputFile).Length/1KB, 2)) KB"
Write-Host "Savings: $([math]::Round((1 - (Get-Item $outputFile).Length/(Get-Item $inputFile).Length) * 100, 1))%"

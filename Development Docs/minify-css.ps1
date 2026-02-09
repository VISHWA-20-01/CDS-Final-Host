# CSS Minification Script
$inputFile = "cds-website/assets/css/combined.css"
$outputFile = "cds-website/assets/css/main.min.css"

# Read the CSS file
$css = Get-Content $inputFile -Raw

# Remove multi-line comments /* ... */
$css = $css -replace '/\*[\s\S]*?\*/', ''

# Remove single-line comments (if any)
$css = $css -replace '//.*', ''

# Remove extra whitespace and newlines
$css = $css -replace '\s+', ' '

# Remove spaces around special characters
$css = $css -replace '\s*{\s*', '{'
$css = $css -replace '\s*}\s*', '}'
$css = $css -replace '\s*:\s*', ':'
$css = $css -replace '\s*;\s*', ';'
$css = $css -replace '\s*,\s*', ','
$css = $css -replace '\s*>\s*', '>'
$css = $css -replace '\s*\+\s*', '+'
$css = $css -replace '\s*~\s*', '~'

# Remove last semicolon in blocks
$css = $css -replace ';}', '}'

# Trim
$css = $css.Trim()

# Write minified CSS
$css | Out-File $outputFile -Encoding UTF8 -NoNewline

# Show file sizes
Write-Host "`nOriginal size: $([math]::Round((Get-Item $inputFile).Length/1KB, 2)) KB"
Write-Host "Minified size: $([math]::Round((Get-Item $outputFile).Length/1KB, 2)) KB"
Write-Host "Savings: $([math]::Round((1 - (Get-Item $outputFile).Length/(Get-Item $inputFile).Length) * 100, 1))%"

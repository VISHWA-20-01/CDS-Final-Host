$baseDir = "assets/images/icons/tech"

# Function to download and colorize SVG
function Download-And-Colorize {
    param (
        [string]$url,
        [string]$startFile,
        [string]$targetColor
    )
    
    $filePath = "$baseDir/$startFile"
    echo "Downloading $startFile from $url..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $filePath
        $content = Get-Content $filePath -Raw
        
        # Simple SVG color replacement (fill/stroke)
        # This is basic and might need adjustment for complex SVGs
        # But for simple icons it usually works to inject fill in <svg> or replace existing fills
        
        if ($content -match "fill=") {
            $content = $content -replace 'fill="[^"]*"', "fill=""$targetColor"""
        }
        else {
            $content = $content -replace '<svg', "<svg fill=""$targetColor"""
        }
        
        Set-Content -Path $filePath -Value $content
        echo "Successfully processed $startFile"
    }
    catch {
        echo "Failed to download $startFile"
    }
}

# AWS (White)
Download-And-Colorize "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws.svg" "aws.svg" "#FFFFFF"

# Azure (White)
Download-And-Colorize "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/azure.svg" "azure.svg" "#FFFFFF"

# Python (White) - Re-download to ensure it's white (it was downloaded from CND but verify)
# SimpleIcons python.svg usually has multiple paths/colors. Force white.
Download-And-Colorize "https://unpkg.com/simple-icons@v14/icons/python.svg" "python.svg" "#FFFFFF"

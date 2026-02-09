$baseDir = "assets/images/icons/tech"
$files = @(
    @{ url = "https://unpkg.com/simple-icons@v14/icons/amazonaws.svg"; file = "aws.svg" },
    @{ url = "https://unpkg.com/simple-icons@v14/icons/microsoftazure.svg"; file = "azure.svg" }
)

foreach ($file in $files) {
    echo "Downloading $($file.file) from Unpkg..."
    try {
        Invoke-WebRequest -Uri $file.url -OutFile "$baseDir/$($file.file)"
        echo "Success: $($file.file)"
    }
    catch {
        echo "Failed: $($file.file) - $_"
    }
}

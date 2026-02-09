$baseDir = "assets/images/icons/tech"

function Download-File {
    param ([string]$url, [string]$file)
    try {
        Invoke-WebRequest -Uri $url -OutFile "$baseDir/$file"
        echo "Downloaded $file"
    }
    catch {
        echo "Failed $file - $_"
    }
}

Download-File "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" "python.svg"
Download-File "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" "google-cloud.svg"
Download-File "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" "azure.svg"
Download-File "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" "aws.svg"

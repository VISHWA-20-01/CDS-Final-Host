$baseDir = "assets/images/icons/tech"
if (!(Test-Path -Path $baseDir)) {
    New-Item -ItemType Directory -Path $baseDir
}

$icons = @(
    @{ url = "https://cdn.simpleicons.org/amazonaws/FFFFFF"; file = "aws.svg" },
    @{ url = "https://cdn.simpleicons.org/microsoftazure/FFFFFF"; file = "azure.svg" },
    @{ url = "https://cdn.simpleicons.org/googlecloud/4285F4"; file = "google-cloud.svg" },
    @{ url = "https://cdn.simpleicons.org/react/61DAFB"; file = "react.svg" },
    @{ url = "https://cdn.simpleicons.org/nodedotjs/339933"; file = "nodejs.svg" },
    @{ url = "https://cdn.simpleicons.org/python/FFFFFF"; file = "python.svg" },
    @{ url = "https://cdn.simpleicons.org/docker/2496ED"; file = "docker.svg" },
    @{ url = "https://cdn.simpleicons.org/kubernetes/326CE5"; file = "kubernetes.svg" },
    @{ url = "https://cdn.simpleicons.org/mongodb/47A248"; file = "mongodb.svg" },
    @{ url = "https://cdn.simpleicons.org/postgresql/4169E1"; file = "postgresql.svg" },
    @{ url = "https://cdn.simpleicons.org/redis/DC382D"; file = "redis.svg" },
    @{ url = "https://cdn.simpleicons.org/terraform/7B42BC"; file = "terraform.svg" },
    @{ url = "https://cdn.simpleicons.org/jenkins/D24939"; file = "jenkins.svg" },
    @{ url = "https://cdn.simpleicons.org/github/FFFFFF"; file = "github.svg" },
    @{ url = "https://cdn.simpleicons.org/typescript/3178C6"; file = "typescript.svg" },
    @{ url = "https://cdn.simpleicons.org/angular/DD0031"; file = "angular.svg" },
    @{ url = "https://cdn.simpleicons.org/vuedotjs/4FC08D"; file = "vuejs.svg" },
    @{ url = "https://cdn.simpleicons.org/nextdotjs/FFFFFF"; file = "nextjs.svg" },
    @{ url = "https://cdn.simpleicons.org/graphql/E10098"; file = "graphql.svg" },
    @{ url = "https://cdn.simpleicons.org/elasticsearch/005571"; file = "elasticsearch.svg" }
)

foreach ($icon in $icons) {
    echo "Downloading $($icon.file)..."
    Invoke-WebRequest -Uri $icon.url -OutFile "$baseDir/$($icon.file)"
}

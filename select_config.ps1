if (Test-Path "docs/es") {
    Copy-Item -Path "site_config_es.yml" -Destination "config.yml" -Force
} elseif (Test-Path "docs/en") {
    Copy-Item -Path "site_config_en.yml" -Destination "config.yml" -Force
} else {
    Write-Output "No se encontró la carpeta de idioma."
}

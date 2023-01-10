<?php

// Defaults
$defaults = [
    "interlace" => true,
    "jpegQuality" => 80,
    "fillTransforms" => true,
    "fillInterval" => 304,
    "filenamePattern" => "{basename}_{transformString}.{extension}",
    "mode" => "crop",
];

// Assets are stored on Amazon S3
$useLocalAssets = getenv("ENVIRONMENT") === "dev";

$localImager = [
    "imagerUrl" => "/volumes/resized/",
    "imagerSystemPath" => CRAFT_PUBLIC_PATH . "/volumes/resized/",
    "fallbackImage" => "https://images.unsplash.com/photo-1612702044266-4808c864311f",
];

$remoteImager = [
    "imagerUrl" => getenv("ASSETS_BASE_URL") . "/resized/",
    "storages" => ["aws"],
    "storageConfig" => [
        "aws" => [
            "accessKey" => getenv("ASSETS_S3_ACCESS_KEY_ID"),
            "secretAccessKey" => getenv("ASSETS_S3_SECRET_ACCESS_KEY"),
            "region" => "ap-southeast-2",
            "bucket" => getenv("ASSETS_S3_BUCKET"),
            "folder" => "assets/resized",
            "requestHeaders" => array(),
            "storageType" => "standard",
        ]
    ]
];

return (array_merge(($useLocalAssets ? $localImager : $remoteImager), $defaults));

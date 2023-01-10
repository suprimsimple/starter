<?php

return [
    "banner" => [
        "displayName" => "Feature banner",
        "transforms" => [
            ["width" => 1920],
            ["width" => 1280],
            ["width" => 1024],
            ["width" => 768],
            ["width" => 400],
        ],
        "defaults" => [
            "ratio" => 2.39,
            "format" => "jpg"
        ],
    ],
    "fullWidth" => [
        "displayName" => "Full-width content block",
        "transforms" => [
            ["width" => 1280],
            ["width" => 1024],
            ["width" => 768],
            ["width" => 400],
            ["width" => 320],
        ],
        "defaults" => []
    ],
    "galleryThumb" => [
        "displayName" => "Gallery slider",
        "transforms" => [
            ["width" => 400],
        ],
        "defaults" => [
            "ratio" => 1.667,
            "format" => "jpg"
        ],
    ],
    "galleryFeature" => [
        "displayName" => "Gallery feature image",
        "transforms" => [
            ["width" => 1920],
            ["width" => 1280],
            ["width" => 1024],
            ["width" => 768],
            ["width" => 400],
        ],
        "defaults" => [
            "ratio" => 1.778,
            "format" => "jpg"
        ],
    ],
    "galleryFull" => [
        "displayName" => "Gallery lightbox image",
        "transforms" => [
            ["width" => 1600, "height" => 1600],
        ],
        "defaults" => [
            "mode" => "fit",
        ],
    ],
    "peopleThumb" => [
        "displayName" => "People profile photo",
        "transforms" => [
            ["width" => 600],
        ],
        "defaults" => [
            "ratio" => 1,
            "format" => "jpg"
        ],
    ],
    "card" => [
        "displayName" => "Thumbnail for cards",
        "transforms" => [
            ["width" => 768],
            ["width" => 600],
            ["width" => 400],
            ["width" => 320],
        ],
        "defaults" => [
            "ratio" => 1,
            "format" => "jpg"
        ],
    ],
];

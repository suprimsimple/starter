<?php

return [
    'fields' => [
        'featureImage' => ['internalBanner', 'card'],
        'fallbackBanner' => ['internalBanner', 'card'],
        'peopleProfileImage' => ['peopleThumb'],
    ],

    'elements' => [
        [
            'elementType' =>  \craft\elements\MatrixBlock::class,
            'criteria' => [
                'type' => 'imageGallery',
            ],
            'fields' => ['images'],
            'transforms' => ['galleryThumb', 'galleryFeature', 'galleryFull']
        ],
        [
            'elementType' =>  \craft\elements\MatrixBlock::class,
            'criteria' => [
                'type' => 'fullwidthImage',
            ],
            'fields' => ['image'],
            'transforms' => ['fullWidth']
        ],
        [
            'elementType' =>  \craft\elements\MatrixBlock::class,
            'criteria' => [
                'type' => 'inlineImage',
            ],
            'fields' => ['image'],
            'transforms' => ['fullWidth', 'galleryFull']
        ],
    ],

];

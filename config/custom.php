<?php

/**
 * Custom Configuration
 */

return [
    // Global settings
    '*' => [

        // Eager-loading fields for all queries
        'eager' => [
            'contentBlocks' => [
                'imageGallery:images',
                'relatedPeople:people',
                'relatedPeople:people.peopleProfileImage',
                'fullwidthImage:image',
                'links:links',
                'video:video',
                'relatedArticles:byArticle',
                'relatedArticles:byCategory',
                'callToAction:links',
            ],
        ],
    ],
];

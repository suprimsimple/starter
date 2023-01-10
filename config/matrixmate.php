<?php

return [
    'fields' => [
        'contentBlocks' => [
            '*' => [
                'groups' => [
                    [
                        'label' => 'Text',
                        'types' => ['heading', 'richText', 'blockquote', 'accordion', 'table'],
                    ],
                    [
                        'label' => 'Media',
                        'types' => ['imageGallery', 'fullwidthImage', 'video'],
                    ],
                    [
                        'label' => 'Related Content',
                        'types' => ['links', 'callToAction', 'relatedArticles', 'relatedPeople'],
                    ],
                    [
                        'label' => 'Misc.',
                        'types' => ['form', 'tableOfContents'],
                    ],
                ],
            ],
            'entryType:childListing,entryType:newsListing' => [
                'groups' => [
                    [
                        'label' => 'Text',
                        'types' => ['heading', 'richText', 'blockquote', 'accordion'],
                    ],
                    [
                        'label' => 'Media',
                        'types' => ['downloads', 'links'],
                    ],
                ],
                'hideUngroupedTypes' => true,
            ],
        ]
    ],
];

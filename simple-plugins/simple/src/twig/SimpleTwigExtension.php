<?php


namespace simple\simple\twig;


use craft\helpers\Json;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Craft;

class SimpleTwigExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction(
                'assetManifest',
                function($asset) {
                    $manifestPath = Craft::getAlias('@webroot')."/dist/manifest.json";
                    if (!file_exists($manifestPath)) {
                        return $asset;
                    }
                    $manifestContent = file_get_contents($manifestPath);
                    $manifest = Json::decodeIfJson($manifestContent);
                    if (!is_array($manifest)) {
                        return $asset;
                    }
                    if (!array_key_exists($asset,$manifest)) {
                        return $asset;
                    }
                    return $manifest[$asset];
                }
            ),

            new TwigFunction(
                'isAssetHot',
                function() {
                    $hotPath = Craft::getAlias('@webroot')."/dist/hot";
                    return file_exists($hotPath);
                }
            ),
        ];
    }

}
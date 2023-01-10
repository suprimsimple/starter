<?php
/**
 * SiteModule module for Craft CMS 3.x
 *
 * @link      simple.com.au
 * @copyright Copyright Simple
 */

namespace modules\sitemodule\twigextensions;

use modules\sitemodule\SiteModule;
use Craft;

/**
 * @author    Simple
 * @package   SiteModule
 * @since     1.0.0
 */
class SiteModuleTwigExtension extends \Twig\Extension\AbstractExtension
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getName()
    {
        return 'SiteModule';
    }

    /**
     * @inheritdoc
     */
    public function getFunctions()
    {
        return [
            new \Twig\TwigFunction('sayGreeting', [$this, 'sayGreeting']),
        ];
    }

    /**
     * @inheritdoc
     */
    public function getFilters()
    {
        return [
            new \Twig\TwigFilter('customFilter', [$this, 'customFilter']),
        ];
    }

    /**
     * @param null $text
     *
     * @return string
     */
    public function sayGreeting($text = null)
    {
        $result = "Go get {$text}!";

        return $result;
    }

    /**
     * @param null $text
     *
     * @return string
     */
    public function customFilter($text = null)
    {
        $result = "Do something with the text variable";

        return $result;
    }
}

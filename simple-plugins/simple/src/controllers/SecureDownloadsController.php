<?php

/**
 * Authenticates users for downloading secure assets
 * 
 * Usage example: "/secure-files/download?uid={{ asset.uid }}"
 */



namespace simple\simple\controllers;

use simple\simple\Simple;

use Craft;
use craft\helpers\App;
use craft\web\Controller;
use craft\elements\Asset;

use yii\web\NotFoundHttpException;

class SecureDownloadController extends Controller {
	protected $allowAnonymous = ['download'];
	
	public function actionDownload() {
		$asset_uid = Craft::$app->request->getParam('uid', '');
		$asset = Asset::find()->uid($asset_uid)->one();
		
		$current_user = Craft::$app->getUser()->getIdentity();
		
		if($asset != null && $current_user != null && $current_user->can('viewVolume:' . $asset->volume->uid)) {
			App::maxPowerCaptain();
			
			return Craft::$app->response->sendStreamAsFile($asset->stream, $asset->filename, ['mimeType' => $asset->mimeType, 'inline' => true, 'fileSize' => $asset->size]);
		}
		
		throw new NotFoundHttpException();
		
		return false;
	}
}

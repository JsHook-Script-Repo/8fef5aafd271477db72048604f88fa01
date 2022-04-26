//感谢xlazl 提供的带壳hook
common.hookAllMethods('android.app.ActivityThread', 'performLaunchActivity', null, function (param) { 
    var mInitialApplication = common.getObjectField(param.thisObject, 'mInitialApplication'); 
    var classLoader = common.callMethod(mInitialApplication, 'getClassLoader'); 
    var PostList = common.findClass('com.one.tomato.entity.PostList', classLoader); 
    var VideoPlayCountUtils = common.findClass('com.one.tomato.utils.post.VideoPlayCountUtils', classLoader); 
    common.hookAllMethods(PostList, 'isAlreadyPaid', function (param) { 
        param.setResult(true);
    }); 
    common.hookAllMethods(VideoPlayCountUtils, 'isFreePlay', function (param) {
        param.setResult(true);
     });
});

Scoped.extend("module:Assets.recorderthemes", [
    "dynamics:Parser"
], function(Parser) {
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/cube-video_recorder_controlbar.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/cube-video_recorder_imagegallery.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/cube-video_recorder_chooser.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/cube-video_recorder_message.html') %>*/ });
    return {
        "cube": {
            css: "ba-videorecorder-theme-cube",
            cssmessage: "ba-videorecorder-theme-cube",
            cssloader: "ba-videorecorder",
            tmplcontrolbar: "<%= template(dirname + '/cube-video_recorder_controlbar.html') %>",
            tmplimagegallery: "<%= template(dirname + '/cube-video_recorder_imagegallery.html') %>",
            tmplchooser: "<%= template(dirname + '/cube-video_recorder_chooser.html') %>",
            tmplmessage: "<%= template(dirname + '/cube-video_recorder_message.html') %>"
        }
    };
});
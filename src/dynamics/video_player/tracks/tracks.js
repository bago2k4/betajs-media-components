Scoped.define("module:VideoPlayer.Dynamics.Tracks", [
    "dynamics:Dynamic",
    "browser:Dom",
    "base:Objs",
    "module:Assets"
], [
    "dynamics:Partials.ClickPartial",
    "dynamics:Partials.RepeatPartial",
    "dynamics:Partials.RepeatElementPartial"
], function(Class, Dom, Objs, Assets, scoped) {
    return Class.extend({
            scoped: scoped
        }, function(inherited) {
            return {

                template: "<%= template(dirname + '/video_player_tracks.html') %>",

                attrs: {
                    "css": "ba-videoplayer",
                    "trackcuetext": null,
                    "acceptedtracktexts": "text/vtt,application/ttml+xml,type/subtype",
                    "trackselectorhovered": false,
                    "uploadtexttracksvisible": false,
                    "uploadlocales": [],
                    "chosenoption": null
                },

                functions: {
                    select_track: function(track) {
                        this.parent().set("trackselectorhovered", false);
                        this.parent().trigger("switch-track", track);
                    },

                    hover_cc: function(hover) {
                        return this.parent().set("trackselectorhovered", hover);
                    },

                    selected_label_value: function(select) {
                        var _options, _chosen;
                        _options = select[0].target.options;
                        _chosen = _options[_options.selectedIndex];

                        if (_chosen.value) {
                            this.set("chosenoption", {
                                lang: _chosen.value,
                                label: _chosen.text
                            });
                        } else {
                            this.set("chosenoption", null);
                        }
                    },

                    upload_text_track: function(domEvent, label) {
                        if (this.get('chosenoption'))
                            this.trigger("upload-text-tracks", domEvent[0].target, label);
                        else {
                            console.warn('can not send empty label');
                        }
                    }
                }

            };
        })
        .register("ba-videoplayer-tracks")
        .registerFunctions({ /*<%= template_function_cache(dirname + '/video_player_tracks.html') %>*/ })
        .attachStringTable(Assets.strings)
        .addStrings({
            "upload-text-tracks": "Upload track text files",
            "select-text-track-language": "Subtitle Language",
            "select-text-track-file": "Select Subtitle File",
            "back": "Back"
        });
});
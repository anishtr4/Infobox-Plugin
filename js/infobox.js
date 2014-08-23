/*!codex-infobox*/
/**

 *
 * Version: 1.0.0 (16/07/2014)
 * Requires: jQuery v1.6+
 *
 * Copyright (c) 2014 Anish
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Developer :Anish
 */

(function ($) {

    $.fn.infobox = function (options) {

        // Establish our default settings
        var settings = $.extend({
            type: 'normal',
            tittle: 'tittle',
            message: 'message',
            effect: 'on',
            anim: 'bounce',
            overlay: 'true',
            vposition: 'left',
            hposition: 'top',
            timeout: '1000',
            speed : '1000',
            animatefrom:'up'
        }, options);

        return this.each(function () {

            var element_select = this;

            mbox_type = settings.type;
            mbox_tittle = settings.tittle;
            mbox_message = settings.message;
            vertical_position = settings.vposition;
            horizontal_position = settings.hposition;
            hide_timeout = settings.timeout;
            overlay_element = settings.overlay;
            animation_effect = settings.effect;
            animation_type = settings.anim;
            animation_from = settings.animatefrom;
            animation_speed = parseInt(settings.speed);

            if (mbox_type == "error") {
                tittle = "<div class='infobox_title _error'>" + mbox_tittle + "</div>";

            } else if (mbox_type == "sucess") {
                tittle = "<div class='infobox_title _sucess'>" + mbox_tittle + "</div>";

            } else {
                tittle = "<div class='infobox_title _normal'>" + mbox_tittle + "</div>";
            }
            box_element = "<div class='infobox_messgae' data-timeout='" + hide_timeout + "'>" + tittle + "<div class='infobox_messagetext'>" + mbox_message + "</div></div>"


            overlay = "<div class='infobox_overlay'></div>"


            $(box_element).appendTo(element_select);
            if (overlay_element == "true") {
                $(overlay).appendTo(element_select);
            }

            var mm_box = $(".infobox_messgae");
            overlay_box = $(".infobox_overlay");

            if (vertical_position == "left") {
                mm_box.css({
                    "left": 0,
                });
            } else {
                mm_box.css({
                    "right": 0,
                });
            }



            if (horizontal_position == "top") {
                mm_box.css({
                    "top": 0,
                });
            } else {
                mm_box.css({
                    "bottom": 0,
                });
            }



            if ($(mm_box).length > 0) {
                $(mm_box).stop(true, false).hide();
            }



            if (animation_effect == "on") {
                $(mm_box).show(animation_type, {
                    direction: animation_from
                }, animation_speed);
            } else {
                $(mm_box).stop(true, false).slideDown("slow");
            }
            setTimeout(function () {

                removeall();
            }, hide_timeout);



            var removeall = function () {

                if ($(mm_box).length > 0) {
                    $(mm_box).slideUp("slow", function () {
                        $(mm_box).remove();
                    });
                }
                if ($(overlay_box).length > 0) {
                    $(overlay_box).fadeOut("slow", function () {
                        $(overlay_box).remove();
                    });
                }
                return true;
            }
        });

    }

}(jQuery));

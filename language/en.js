var Translations = {
    "SkipBackButtonText": "Skip back",
    "SkipForwardButtonText": "Skip forward",
    "PlayPauseButtonText": "Play/Pause",
    "VolumeButtonText": "Volume",
    "SettingsButtonText": "Settings",
    "ResumeVideoPlayback": "Resume Video Playback",

    "QualityMenuText": "Quality",
    "QualityAutoText": "Auto",
    "LanguageMenuText": "Language",
    "CCMenuText": "Captions",
    "BackFromText": "Back from",
    "OnText": "On",
    "OffText": "Off",

    "SocialIcon-facebook": "Facebook",
    "SocialIcon-twitter": "Twitter",
    "SocialIcon-googleplus": "Google+",
    "SocialIcon-email": "Email",
    "SocialIcon-link": "Website",
    "CollapseText": "Collapse",
    "ExpandText": "Expand",

    "PreparedForText": "Prepared for",

    "CopyrightText": "Copyright 2017 Client Name",
    "PoweredByFooterText": "Powered by",
    "HelpFooterText": "Help",
    "PrivacyPolicyFooterText": "Privacy Policy",

    /**
     * Settings for the CTA buttons.
     *
     * In this object you can define up to 5 CTA buttons, each with a "label" and "icon" property.
     * The key for each object should be unique to each button. And the "icon" property should correspond to
     * a CTA icon CSS class in the form of ".cta__icon--<icon>".
     *
     * In addition, each button can either have a "card" or "url" property to define its function.
     *
     * "card" buttons activate a side card that is defined in the video project. This property should have the value
     * of the target cards id from the Interactions Manager in the EOV Director.
     *
     * "url" buttons will open the specified URL in a new window/tab when clicked
     */
    "CtaButtonSettings": {},

    /**
     * Settings for the promo graphic sections. By default only 2 promo areas can be defined.
     * Each promo graphic requires the following:
     *
     * "trackingName" to define how clicks on it will be tracked within the EngageOne Video platform
     * "url" to go to when the promo is clicked
     * "desktopImage" the relative path to the promo image used on desktop breakpoints. This should be portrait.
     * "mobileImage" the relative path to the promo image used on mobile breakpoints. This should be landscape.
     */
    "PromoSettings": {},

    /**
     * Chapter settings used to build the timeline and StateMap, which maps video states to friendly names.
     *
     * Within each "chapter" one or more states can exist. The state "width" specifies the width of the "chapter",
     * expressed as a percentage. The state "cardId" corresponds to the states id in the EngageOne Video Director.
     * There also exists "label" which specifies the label for the timeline "chapter".
     *
     * All videos have an END state, this should not be defined here as it is an implicit construct.
     */
    "ChapterSettings": [
        {
            "label": "Hello",
            "states": [
                {
                    "cardId": "START",
                    "width": 10
                }
            ]
        },
        {
            "label": "ID Card",
            "states": [
                {
                    "cardId": "2bc48882",
                    "width": 15
                }
            ]
        },
        {
            "label": "PCP",
            "states": [
                {
                    "cardId": "8a4bbb43",
                    "width": 15
                }
            ]
        },
        {
            "label": "Urgent Care",
            "states": [
                {
                    "cardId": "835c2824",
                    "width": 15
                }
            ]
        },
        {
            "label": "Cost Sharing",
            "states": [
                {
                    "cardId": "73c8fd3b",
                    "width": 15
                }
            ]
        },
        {
            "label": "Benefits",
            "states": [
                {
                    "cardId": "2a42642f",
                    "width": 10
                }
            ]
        },
        {
            "label": "Portal",
            "states": [
                {
                    "cardId": "76b093bf",
                    "width": 10
                }
            ]
        },
        {
            "label": "HRA",
            "states": [
                {
                    "cardId": "242a8aa5",
                    "width": 10
                }
            ]
        },
    ]
}

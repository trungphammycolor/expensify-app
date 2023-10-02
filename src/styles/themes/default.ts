import SCREENS from '../../SCREENS';
import colors from '../colors';
import type {ThemeBase} from './types';

const darkTheme = {
    // Figma keys
    appBG: colors.darkAppBackground,
    splashBG: colors.green400,
    highlightBG: colors.darkHighlightBackground,
    border: colors.darkBorders,
    borderLighter: colors.darkDefaultButton,
    borderFocus: colors.green400,
    icon: colors.darkIcons,
    iconMenu: colors.green400,
    iconHovered: colors.darkPrimaryText,
    iconSuccessFill: colors.green400,
    iconReversed: colors.darkAppBackground,
    iconColorfulBackground: `${colors.ivory}cc`,
    textSupporting: colors.darkSupportingText,
    text: colors.darkPrimaryText,
    textColorfulBackground: colors.ivory,
    link: colors.blue300,
    linkHover: colors.blue100,
    buttonDefaultBG: colors.darkDefaultButton,
    buttonHoveredBG: colors.darkDefaultButtonHover,
    buttonPressedBG: colors.darkDefaultButtonPressed,
    danger: colors.red,
    dangerHover: colors.redHover,
    dangerPressed: colors.redHover,
    warning: colors.yellow400,
    success: colors.green400,
    successHover: colors.greenHover,
    successPressed: colors.greenPressed,
    transparent: colors.transparent,
    signInPage: colors.green800,

    // Additional keys
    overlay: colors.darkBorders,
    inverse: colors.darkPrimaryText,
    shadow: colors.black,
    componentBG: colors.darkAppBackground,
    hoverComponentBG: colors.darkHighlightBackground,
    activeComponentBG: colors.darkBorders,
    signInSidebar: colors.green800,
    sidebar: colors.darkHighlightBackground,
    sidebarHover: colors.darkAppBackground,
    heading: colors.darkPrimaryText,
    textLight: colors.darkPrimaryText,
    textDark: colors.darkAppBackground,
    textReversed: colors.lightPrimaryText,
    textBackground: colors.darkHighlightBackground,
    textMutedReversed: colors.darkIcons,
    textError: colors.red,
    offline: colors.darkIcons,
    modalBackground: colors.darkAppBackground,
    cardBG: colors.darkHighlightBackground,
    cardBorder: colors.darkHighlightBackground,
    spinner: colors.darkSupportingText,
    unreadIndicator: colors.green400,
    placeholderText: colors.darkIcons,
    heroCard: colors.blue400,
    uploadPreviewActivityIndicator: colors.darkHighlightBackground,
    dropUIBG: 'rgba(6,27,9,0.92)',
    receiptDropUIBG: 'rgba(3, 212, 124, 0.84)',
    checkBox: colors.green400,
    pickerOptionsTextColor: colors.darkPrimaryText,
    imageCropBackgroundColor: colors.darkIcons,
    fallbackIconColor: colors.green700,
    reactionActiveBackground: colors.green600,
    reactionActiveText: colors.green100,
    badgeAdHoc: colors.pink600,
    badgeAdHocHover: colors.pink700,
    mentionText: colors.blue100,
    mentionBG: colors.blue600,
    ourMentionText: colors.green100,
    ourMentionBG: colors.green600,
    tooltipSupportingText: colors.lightSupportingText,
    tooltipPrimaryText: colors.lightPrimaryText,
    skeletonLHNIn: colors.darkBorders,
    skeletonLHNOut: colors.darkDefaultButton,
    QRLogo: colors.green400,
    starDefaultBG: 'rgb(254, 228, 94)',
    loungeAccessOverlay: colors.blue800,
    mapAttributionText: colors.black,
    PAGE_BACKGROUND_COLORS: {
        [SCREENS.HOME]: colors.darkHighlightBackground,
        [SCREENS.SAVE_THE_WORLD.ROOT]: colors.tangerine800,
        [SCREENS.SETTINGS.PREFERENCES]: colors.blue500,
        [SCREENS.SETTINGS.WORKSPACES]: colors.pink800,
        [SCREENS.SETTINGS.SECURITY]: colors.ice500,
        [SCREENS.SETTINGS.STATUS]: colors.green700,
        [SCREENS.SETTINGS.ROOT]: colors.darkHighlightBackground,
    },
} satisfies ThemeBase;

export default darkTheme;

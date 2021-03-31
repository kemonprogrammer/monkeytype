//this file should be concatenated at the top of the legacy js files

import Chart from "chart.js";
import chartTrendline from "chartjs-plugin-trendline";
import chartAnnotation from "chartjs-plugin-annotation";

Chart.plugins.register(chartTrendline);
Chart.plugins.register(chartAnnotation);

import * as DB from "./db";
import * as Misc from "./misc";
import * as CloudFunctions from "./cloud-functions";
import * as Monkey from "./monkey";
import * as Notifications from "./notifications";
import * as ResultFilters from "./result-filters";
import * as Leaderboards from "./leaderboards";
import * as Sound from "./sound";
import * as CustomText from "./custom-text";
import * as ShiftTracker from "./shift-tracker";
import * as TestStats from "./test-stats";
import * as ThemeColors from "./theme-colors";
import * as ChartController from "./chart-controller";
import * as Caret from "./caret";
import * as ManualRestart from "./manual-restart-tracker";
import Config, * as UpdateConfig from "./config";
import * as Focus from "./focus";
import * as AccountButton from "./account-button";
import * as TestUI from "./test-ui";
import * as Keymap from "./keymap";
import "./caps-warning";
import * as LiveAcc from "./live-acc";
import * as TimerProgress from "./timer-progress";
import * as TestLogic from "./test-logic";
import * as Funbox from "./funbox";
import * as PaceCaret from "./pace-caret";
import * as TagController from "./tag-controller";
import * as TestTimer from "./test-timer";
import * as UI from "./ui";
import * as CommandlineLists from "./commandline-lists";
import * as ChallengeController from "./challenge-controller";
import * as TestConfig from "./test-config";
import * as MiniResultChart from "./mini-result-chart";
import * as SignOutButton from "./sign-out-button";
import "./support-popup";
import "./version-popup";
import * as LayoutEmulator from "./layout-emulator";
import * as AccountController from "./account-controller";
import * as ResultTagsPopup from "./result-tags-popup";
import * as Settings from "./settings";
import * as SimplePopups from "./simple-popups";
import * as ThemePicker from "./theme-picker";
import "./custom-theme-popup";
import "./import-settings-popup";
import * as AllTimeStats from "./all-time-stats";
import * as PbTables from "./pb-tables";
import * as Account from "./account";
import * as VerificationController from "./verification-controller";
import "./input-controller";

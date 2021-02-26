import en_US from './en_US';

export enum reaction {
    /**REACTIONS MODULE */
    びっくり, 一口, 赤面, ブープ, 応援,
    拍手, 混乱している, 泣く, 寄り添う, ダンス,
    フィード, ハッピー, ホールド, 抱擁, 接吻,
    笑い, スケベ, なめる, nom, パット,
    ポーク, ふくれっ面, パンチ, 実行, 怖い,
    びっくりした, 叫ぶ, 平手打ち, スマイル, 独善的,
    見詰める, びっくりし, いいぞ, くすぐる, 波
}

export enum help {
    /**HELP MODULE */
    フィルター, ファン, 大須, 音楽, 反応, ユーティリティ, プレイリスト
}

export default {
    /**DEFAULT VALUE */
    ...en_US,

    //Music
    ADDED_TO_QUEUE: 'キューに {MUSIC} を追加しました',
    STARTED_PLAYING_MUSIC: '再生を開始します',
    MUSIC_SKIPPED: 'スキップされた音楽',
    MUSIC_STOPPED: '停止した音楽',
    MUSIC_PAUSED: '一時停止した音楽',
    MUSIC_RESUMED: '再開された音楽',
    MUSIC_END: '私たちは曲を使い果たしました!より良いいくつかのより多くの曲をキューに入れます。',
    MUSIC_END_2: 'ラン・アウト・オブ・ソング',
    MUSIC_IN_VOICE: 'これを使用するには、音声チャネルにいる必要があります',
    MUSIC_HAVE_PERM_CONNECT: '私はあなたの音声チャンネルで許可を持っていません',
    MUSIC_NO_RESULTS: '引数に結果が見つかりません',
    MUSIC_PROMPT: 'どの音楽を再生したいですか?',
    MUSIC_PROMPT_2: 'あなたは決める {TIME} があります。',
    MUSIC_VOLUME_PROMPT: '新しいボリュームを設定する',
    MUSIC_VOLUME: '今すぐ音楽の音量',
    QUEUE_NOW_PLAYING: 'ナウ・プレーイング',
    CURRENT_QUEUE: '現在のキュー',
    ENTRIES: 'エントリ',
    MUSIC_REMOVED: 'キューから {MUSIC} を削除',
    ENABLE_FILTERS: '{STATUS} {FILTERS} フィルターを回しました。',
    MUSIC_SKIPPED_TO: 'スキップされた',
    MUSIC_SEEK: '音楽を求める',
    INVALID_VOLUME: '無効なボリューム、有効なボリュームは 1 から 100 の間です。',
    MUSIC_LOOP_INVALID: '無効なオプション、有効なオプションは `キュー`、`ソング` のみ',
    MUSIC_LOOP_QUEUE: 'ループキューを回した',
    MUSIC_LOOP_SONG: '回されたループソング',
    MUSIC_NO_QUEUE: '音楽は再生されません。',
    MUSIC_SAME_VOICE: 'あなたは私と同じ音声チャンネルでなければなりません',
    MUSIC_EXCEED_LIMIT: 'キューの制限 {LIMIT} の音楽をキューに超過しました。',
    MUSIC_IS_PLAYING: '音楽がすでに再生されている状態を再開することはできません',
    
    /**UTIL MODULES */
    UTIL_COMMAND_HELP: 'コマンド',
    UTIL_COMMAND_HELP_2: '使用可能なコマンドのリスト。コマンドの追加情報については、{PREFIX} と入力してください。',
    UTIL_COMMAND_HELP_DESCRIPTION: '説明',
    UTIL_COMMAND_HELP_ALIASES: 'エイリアス',
    UTIL_COMMAND_HELP_EXAMPLES: '例',
    UTIL_COMMAND_HELP_FOOTER: 'ℹ️ <>または [] を含めないでください。 <> は必須を意味し、[] はオプションを意味します。',
    
    /**OSU MODULES */
    OSU_NO_USERNAME_INPUT: '<:nezuko_mad_2:808653903725723688> | ユーザー名を入力してください！',
    OSU_RECENT_NOT_FOUND: '<:nezuko_cry:808656072343814154> | プレイヤーデータが見つかりません！',
    OSU_USER_ON_MODE: (user: string, mode: string) => `${user} オン ${mode}`,
    OSU_ACCURACY: '正確さ',
    OSU_RANKS: 'ランク',
    OSU_JOIN_DATE: '参加日',
    OSU_LEVEL: 'レベル',
    OSU_PERFORMANCE: 'パフォーマンス',
    OSU_PLAYTIME: 'プレイタイム',
    OSU_USERNAME: 'ユーザー名',
    OSU_PLAYCOUNT: '再生回数',
    OSU_COUNT_RANKS: 'ランクを数える',
    OSU_SCORE: 'スコア',
    OSU_MODS: 'モッド',
    
    /**MISC */
    ERROR_OCCURED: 'ああ違います！エラーが発生しました!',
    ERROR_OCCURED_2: 'この問題を報告する',
    REACTIONS: (tag: number) => `ランダム ${reaction[tag]} 画像`,
    HELP: (Help: number) => help[Help]
} as typeof en_US;

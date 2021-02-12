import en_US from './en_US'
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
    QUEUE_NOW_PLAYING: '今すぐプレイ',
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
    UTIL_COMMAND_HELP_2: '使用可能なコマンドのリスト。コマンドの追加情報については、{prefix} と入力してください。',
    UTIL_COMMAND_HELP_DESCRIPTION: '説明',
    UTIL_COMMAND_HELP_ALIASES: 'エイリアス',
    UTIL_COMMAND_HELP_EXAMPLES: '例',
    
    /**MISC */
    ERROR_OCCURED: 'ああ違います！エラーが発生しました!',
    ERROR_OCCURED_2: 'この問題を報告する'
}

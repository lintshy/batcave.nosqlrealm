export const ChannelMeta = {
    tvgId: String,
    tvgName: String,
    tvgLogo: String,
    groupTitle: String,
    url: String,
    genre: String,
    region: String

}

export type ChannelProps = {
    tvgId: String,
    tvgName: String,
    tvgLogo: String,
    groupTitle: String,
    url: String,
    genre?: String,
    region?: String
}

export type ChannelInput = {
    channel: ChannelProps
}
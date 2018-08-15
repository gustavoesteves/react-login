function BodyEncode<T>(values: T): string {
    return encodeURIComponent(Object.keys(values)
        .map(key => key + "=" + values[key])
        .join("&"));
}
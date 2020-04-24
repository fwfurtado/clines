export default (callable) =>  async (req, res) => {
    const response = await callable(req.query);
    const {headers, status} = response;

    const bodyText = await response.text()

    res.statusCode = status

    headers.forEach((value, key) => res.setHeader(key, value))

    res.end(bodyText)
}
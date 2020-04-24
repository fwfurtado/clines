const backendApi = process.env.CLINES_API_URL || 'http://localhost:8080'

module.exports = {
    env: {
        CLINES_API_URL: backendApi
    }
}
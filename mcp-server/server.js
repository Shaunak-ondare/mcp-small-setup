const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4000;

const SONAR_URL = process.env.SONAR_HOST_URL;
const TOKEN = process.env.SONAR_TOKEN;

// 🔧 MCP TOOL: get issues
app.get('/mcp/issues', async (req, res) => {
    try {
        const response = await axios.get(
            `${SONAR_URL}/api/issues/search?projectKeys=mcp-demo`,
            {
                auth: {
                    username: TOKEN,
                    password: ''
                }
            }
        );

        res.json({
            tool: "sonarqube.issues",
            count: response.data.total,
            issues: response.data.issues
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔧 MCP TOOL: project summary
app.get('/mcp/summary', async (req, res) => {
    try {
        const response = await axios.get(
            `${SONAR_URL}/api/measures/component?component=mcp-demo&metricKeys=bugs,vulnerabilities,code_smells`,
            {
                auth: {
                    username: TOKEN,
                    password: ''
                }
            }
        );

        res.json({
            tool: "sonarqube.summary",
            metrics: response.data.component.measures
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`MCP Server running on port ${PORT}`);
});
import os
import sys
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src"))

from llm import ClientFactory, LLMClient


class LlmProviderFactoryTest(unittest.TestCase):
    def test_from_env_supports_openai_provider_model(self):
        with patch.dict(
            os.environ,
            {
                "LLM_MODEL": "openai/gpt-4o-mini",
                "OPENAI_API_KEY": "sk-openai",
            },
            clear=True,
        ):
            client = ClientFactory.from_env()

        self.assertIsInstance(client, LLMClient)
        self.assertEqual(client.api_key, "sk-openai")
        self.assertEqual(client.model, "gpt-4o-mini")
        self.assertEqual(client.base_url, "https://api.openai.com")

    def test_from_env_supports_compatible_provider(self):
        with patch.dict(
            os.environ,
            {
                "LLM_MODEL": "compatible/vendor-model",
                "LLM_API_KEY": "sk-compatible",
                "LLM_BASE_URL": "https://gateway.example.com/v1",
            },
            clear=True,
        ):
            client = ClientFactory.from_env()

        self.assertIsInstance(client, LLMClient)
        self.assertEqual(client.api_key, "sk-compatible")
        self.assertEqual(client.model, "vendor-model")
        self.assertEqual(client.base_url, "https://gateway.example.com/v1")


if __name__ == "__main__":
    unittest.main()

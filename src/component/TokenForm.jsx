import React, { useState } from 'react';
import '../TokenForm.css';

const TokenForm = () => {
  const [blueTokenCount, setBlueTokenCount] = useState();
  const [bluePrefix, setBluePrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState('');
  const [redTokenCount, setRedTokenCount] = useState();
  const [redPrefix, setRedPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState('');
  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const handleGenerate = () => {
    const blueTokens = Array.from({ length: blueTokenCount }, (_, i) => `${bluePrefix}${i + 1}`);
    const redTokens = Array.from({ length: redTokenCount }, (_, i) => `${redPrefix}${i + 1}`);
    setTokens({ blue: blueTokens, red: redTokens });
  };

  const handleClear = () => {
    setBlueTokenCount(0);
    setBluePrefix('');
    setBlueTokensPerRow('');
    setRedTokenCount(0);
    setRedPrefix('');
    setRedTokensPerRow('');
    setTokens({ blue: [], red: [] });
  };

  const chunkTokens = (tokensArray, tokensPerRow) => {
    const rows = [];
    for (let i = 0; i < tokensArray.length; i += tokensPerRow) {
      rows.push(tokensArray.slice(i, i + tokensPerRow));
    }
    return rows;
  };

  return (
    <div className="token-form-container">
      <h5 className="token-form-title">Token Generator Application</h5>

      <div className="token-input">
        <label>Number of Blue Tokens</label>
        <input
          type="number"
          className="token-input-field1"
          value={blueTokenCount}
          onChange={(e) => setBlueTokenCount(Number(e.target.value))}
        />
      </div>
      <div className="token-input">
        <label>Prefix for Blue Tokens</label>
        <input
          type="text"
          className="token-input-field2"
          value={bluePrefix}
          onChange={(e) => setBluePrefix(e.target.value)}
        />
      </div>
      <div className="token-input">
        <label>Blue Tokens per Row</label>
        <input
          type="number"
          className="token-input-field3"
          value={blueTokensPerRow}
          onChange={(e) => setBlueTokensPerRow(e.target.value)}
        />
      </div>

      <div className="token-input">
        <label>Number of Red Tokens</label>
        <input
          type="number"
          className="token-input-field4"
          value={redTokenCount}
          onChange={(e) => setRedTokenCount(Number(e.target.value))}
        />
      </div>
      <div className="token-input">
        <label>Prefix for Red Tokens</label>
        <input
          type="text"
          className="token-input-field5"
          value={redPrefix}
          onChange={(e) => setRedPrefix(e.target.value)}
        />
      </div>
      <div className="token-input">
        <label>Red Tokens per Row</label>
        <input
          type="number"
          className="token-input-field6"
          value={redTokensPerRow}
          onChange={(e) => setRedTokensPerRow(e.target.value)}
        />
      </div>

      <div className="action-buttons">
        <button className="generate-button" onClick={handleGenerate}>
          Generate
        </button>
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="generated-tokens">
        <div className="tokens-container">
          {chunkTokens(tokens.blue, parseInt(blueTokensPerRow) || 1).map((row, rowIndex) => (
            <div className="token-row blue-row" key={`blue-row-${rowIndex}`}>
              <div className="token-paper blue-paper">
                {row.map((token, index) => (
                  <span key={index} className="blue-token">
                    {token}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {chunkTokens(tokens.red, parseInt(redTokensPerRow) || 1).map((row, rowIndex) => (
            <div className="token-row red-row" key={`red-row-${rowIndex}`}>
              <div className="token-paper red-paper">
                {row.map((token, index) => (
                  <span key={index} className="red-token">
                    {token}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenForm;

# EL Insights — Daily Macro Brief

> *"I know Kung Fu."* — Neo, The Matrix

Give your AI agent this skill file and it instantly becomes a macro rates/FX strategist — complete with sources, format discipline, and the instinct to verify before it writes.

---

## What This Is

A minimal workflow for generating a professional **2-page macro strategy brief** using an AI coding assistant (Claude Code, Codex, OpenCode, etc.). The AI:

1. Checks live sources for current rates, FX levels, and central bank guidance
2. Writes the brief in the **EL Insights** style (boutique macro house, own + client funds)
3. Outputs a print-ready HTML file
4. Converts to PDF via Puppeteer

---

## Files

| File | Purpose |
|------|---------|
| `skill.md` | The AI persona — drop this into your assistant's context |
| `brief.html` | Reference template (cyan palette, 2-page A4 layout) |
| `generate-pdf.js` | Puppeteer script: HTML → PDF |
| `package.json` | Single dependency: `puppeteer` |

---

## Quickstart

```bash
# 1. Install
npm install

# 2. Load the skill into your AI assistant
# Claude Code: reference skill.md in your CLAUDE.md or paste the prompt
# Other assistants: paste the contents of skill.md as a system prompt

# 3. Ask the AI to generate a brief
# "As the EL Insights Macro Analyst, generate today's brief"

# 4. AI writes brief.html — then convert to PDF
npm run pdf
# → brief.pdf (A4, print-ready)
```

---

## The "I Know Kung Fu" Moment

`skill.md` contains:
- The analyst **persona** (E. Leow, Chief Macro Strategist)
- **Coverage scope** (G10 rates, FX, EM Asia)
- **Sources to check** (Fed, ECB, BOJ, BIS, IMF, FT)
- **Format discipline** (2 pages, inline SVG charts, Key Events box, forecasts table)
- **Verification instinct** (always check live rates before writing)
- **MAS disclaimer** (internal use, not financial advice)

An AI without this file will hallucinate rates and produce generic output. An AI with this file behaves like a strategist who has done this every morning for years.

---

## Sample Output

**Theme:** *Dollar in Retreat: USD weakness dominates G3 divergence*

| Pair | Current | Q2 26 | Q3 26 |
|------|---------|-------|-------|
| EUR/USD | 1.1791 | 1.1850 | 1.2000 |
| USD/JPY | 158.50 | 159.00 | 155.00 |
| GBP/USD | 1.3544 | 1.3600 | 1.3750 |

---

## Customisation

- **House name:** Replace "EL Insights" throughout `brief.html` and `skill.md`
- **Colours:** Change the 3 cyan values in `brief.html` CSS (`#0e7490`, `#06b6d4`, `#e0f7fa`)
- **Analyst name:** Update `skill.md` persona section
- **Coverage:** Extend `skill.md` to add EM rates, commodities, or equity strategy

---

## Disclaimer

*Briefs generated using this workflow are for internal strategy team use only. Not intended as financial advice. For use in accordance with applicable regulatory guidelines.*

---

*Built with Claude Code · April 2026*

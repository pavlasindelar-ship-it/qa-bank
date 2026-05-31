# QA Bank Playwright Test Suite

Tento projekt obsahuje automatizované E2E testy pro aplikaci **Parabank** spuštěnou v Docker kontejneru.

## Co je potřeba

- Node.js (doporučeno 18+)
- npm
- Docker Desktop nebo jiný způsob, jak spustit Docker kontejner
- Přístup k image: `parasoft/parabank`

## Dev stack

- `@playwright/test` — testovací framework pro koncové testy
- `@faker-js/faker` — generátor testovacích dat
- `dotenv` — načítání proměnných prostředí
- `i18next` — lokalizace textů v testech
- Docker (aplikace Parabank běží v lokálním kontejneru)

## První kroky

1. Klonujte repozitář:
   ```bash
   git clone <repo-url>
   cd qa-bank
   ```
2. Nainstalujte závislosti:
   ```bash
   npm install
   ```
3. Spusťte Docker Desktop nebo jiný Docker daemon.

## Spuštění Parabank v Dockeru

Aplikace testuje lokálně běžící instanci Parabank na adrese `http://127.0.0.1:8080/`.

Spusťte kontejner:

```bash
docker run --rm -d -p 8080:8080 parasoft/parabank
```

> Pokud již máte Docker Desktop nainstalovaný, stačí tento příkaz spustit v terminálu.

Po spuštění kontejneru ověřte, že je Parabank dostupný v prohlížeči:

`http://127.0.0.1:8080/`

## Spuštění testů

Testy spustíte pomocí Playwrightu:

```bash
npx playwright test
```

Pokud chcete spustit konkrétní soubor:

```bash
npx playwright test tests/homepage.spec.ts
```

Pro report v HTML po běhu testů:

```bash
npx playwright show-report
```

## Struktura projektu

- `package.json` — Node závislosti a metadata projektu
- `playwright.config.ts` — konfigurace Playwright testů
- `core/` — sdílené fixtures, lokalizace a utilitky
  - `fixtures/` — definice fixture pro různé testovací scénáře
  - `locales/` — překlady a texty pro testy
  - `utils/` — pomocné funkce a testovací data
- `model/` — Page Object Model a verifikace
  - `pages/` — stránky aplikace a akce nad nimi
  - `verifications/` — ověřovací metody pro výsledky testů
- `tests/` — samotné testovací případy
- `tests-result/` — výstupní data (screenshoty, trace, reporty)
- `playwright-report/` — generované výsledky reportů
- `test-results/` — další uložené testovací výstupy
- `types/` — typové definice, jako `translations.d.ts`

## Seznam testů

Aktuálně repo obsahuje tyto testy:

- `tests/homepage.spec.ts` — testy pro hlavní stránku a navigaci
- `tests/dasboardpage.spec.ts` — testy pro dashboard po nové registraci
- `tests/registerpage.spec.ts` — testy pro registraci uživatele

## Tipy pro práci

- Před spuštěním testů vždy zkontrolujte, že je Docker kontejner Parabank spuštěný.
- Výchozí `baseURL` a porty jsou nastaveny v `playwright.config.ts`.
- Testy mohou generovat screenshoty a trace soubory v případě selhání.

## Poznámka

Tento projekt je nastaven pro lokální testování aplikace `parasoft/parabank` na `http://127.0.0.1:8080/`.

Pokud chcete změnit cílovou URL nebo konfiguraci browseru, upravte `playwright.config.ts`.

---

**Autor:** Pavla Šindelářová

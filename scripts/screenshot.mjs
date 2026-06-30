import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/screenshots')
mkdirSync(outDir, { recursive: true })

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const sites = [
  { url: 'https://masjidalitisam.vercel.app', file: 'masjidalitisam.png' },
]

const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const site of sites) {
  console.log(`Capturing ${site.url} ...`)
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  try {
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 60000 })
    await new Promise(r => setTimeout(r, 1500))
    await page.screenshot({
      path: join(outDir, site.file),
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    })
    console.log(`  ✓ Saved ${site.file}`)
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`)
  }
  await page.close()
}

await browser.close()
console.log('\nDone.')

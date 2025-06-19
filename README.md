# play-write-test

# Updating Playwright
`` yarn add --dev @playwright/test@latest ``
# Also download new browser binaries and their dependencies:
`` yarn playwright install --with-deps ``

# การคำนวนการใช้ worker ในการ run
จำนวน worker = จำนวน core - 1 

# Running the Example Test
`` yarn playwright test ``

# HTML Test Reports
`` yarn playwright show-report ``

# Running the Example Test in UI Mode
`` yarn playwright test --ui ``

# Run แบบ เป็น step กด เอง 
``yarn playwright test --debug``

# codegen เพืิ่มความสะดวกสะบาย
`` yarn playwright codegen https://workshop-saucedemo.vercel.app/login ``


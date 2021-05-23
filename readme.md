# Prós

- Team Share
- Tests
- Automatization
- Easy to use
- Light weight
- Some cool system variables

```
{{#randomString}} - generates random uuid
{{#randomNumber}} - generates random number between 1 to 1000000
{{#randomEmail}} - generates random email
{{#date}} - generates date timestamp
{{#dateISO}} - generates date ISO format
```

# Cons

- .db files saves all history while running project. If you "reload collections", history got deleted (clean the file and keeps just last requests. Mandatory before commit)
- "Files changes are not detected by the extension yet, if you pulled changes from git, click Reload option from collection Tab to update data." (reload collections after a git pull)
- not open-source

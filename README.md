# Demonstration of Deno v2 and Tsoa

This is a simple demonstration of how to use Deno v2 with Tsoa.

## Usage

### Deno

You will need Deno V2 installed

https://docs.deno.com/

### Install

With the project checked out run deno install

```bash
deno install
```

### Run

To run the server run the dev task

```bash
deno task dev
```

### Test

Call the health endpoint to test the server is running

```bash
curl http://localhost:3000/health
```

## Summary

This is a simple demonstration of how to use Deno v2 with Tsoa. The project is a simple REST API with a single health endpoint

The only change required is to use the `experimentalDecorators` compiler option in the deno.json.

Some other tweaks are also in place to avoid linting the auto-generated files including adding the flag `--unstable-sloppy-imports` to the deno dev task command.


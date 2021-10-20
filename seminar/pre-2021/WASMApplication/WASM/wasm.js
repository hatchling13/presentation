function fetchAndInstantiate(src)
{
    // Returns Promise object which is resolved to instance and module

    var wasmPromise;

    var responsePromise = fetch(src).then(response => response.arrayBuffer());

    wasmPromise = Promise.resolve(responsePromise).then(bytes => WebAssembly.instantiate(bytes));

    return wasmPromise;
}


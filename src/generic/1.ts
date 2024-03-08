function getPromise<T>() {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise<Array<string | number>>()
  .then((data) => {
    console.log(data);
  });

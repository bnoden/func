const functor = val => ({ map: () => functor(val) });

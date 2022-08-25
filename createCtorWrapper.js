// eslint-disable-next-line no-unused-vars
function createCtorWrapper(Ctor) {
    return function () {
        var args = arguments;
        // eslint-disable-next-line default-case
        switch (args.length) {
            case 0:
                return new Ctor();
            case 1:
                return new Ctor(args[0]);
            case 2:
                return new Ctor(args[0], args[1]);
            case 3:
                return new Ctor(args[0], args[1], args[2]);
            case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
        }
        // eslint-disable-next-line no-undef
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // eslint-disable-next-line no-undef
        return isObject(result) ? result : thisBinding;
    };
}

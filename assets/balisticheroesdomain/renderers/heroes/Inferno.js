extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "fiskheroes:inferno_layer1",
    "layer2": "fiskheroes:inferno_layer2",
});
function init(render) {
    parent.init(render);
    render.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "righLeg", "leftLeg");
}
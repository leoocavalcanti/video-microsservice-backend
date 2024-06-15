import { Uuid } from "../../../shared/value-objects/uuid.vo";
import { Category } from "../category.entity";

describe("Category Unit Tests", () => {
  describe("constructor", () => {
    it("should create a category with default values", () => {
      const category = new Category({
        name: "Movie",
      });

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("should create a category with all values", () => {
      const created_at = new Date();
      const category = new Category({
        name: "Movie",
        description: "Movie category",
        is_active: false,
        created_at,
      });

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie category");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    });

    it("should create a category with name and description", () => {
      const category = new Category({
        name: "Movie",
        description: "Movie category",
      });

     expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie category");
      expect(category.is_active).toBeTruthy();
    });
  });

  describe("factory", () => {
    it("should create a category", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie category",
        is_active: false,
      });

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie category");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("should update a category", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie category",
        is_active: false,
      });

      const updatedCategory = category.update({
        name: "Film",
        description: "Film category",
        is_active: true,
      });

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(updatedCategory.name).toBe("Film");
      expect(updatedCategory.description).toBe("Film category");
      expect(updatedCategory.is_active).toBeTruthy();
      expect(updatedCategory.created_at).toBeInstanceOf(Date);
    });
  });

  describe("methods", () => {
    it("should change category name", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie category",
        is_active: false,
      });

      category.changeName("Film");

      expect(category.name).toBe("Film");
    });

    it("should change category description", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie category",
        is_active: false,
      });

      category.changeDescription("Film category");

      expect(category.description).toBe("Film category");
    });

    it("should activate category", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie category",
        is_active: false,
      });

      category.activate();

      expect(category.is_active).toBeTruthy();
    });

    it("should deactivate category", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie category",
        is_active: true,
      });

      category.deactivate();

      expect(category.is_active).toBeFalsy();
    });
  });

  describe("category_id field", () => {
    const arrange = [{category_id: null}, {category_id: undefined}, {category_id: new Uuid()}];
    it.each(arrange)("id = %j", ({category_id}) => {
      const category = new Category({
        name: "Movie",
        category_id: category_id as any,
      });
      
      if(category_id instanceof Uuid) {
        expect(category.category_id).toBeInstanceOf(Uuid)
      }
    });
  })
});

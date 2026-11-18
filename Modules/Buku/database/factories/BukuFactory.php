<?php

namespace Modules\Buku\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Buku\Models\Buku;

/**
 * @extends Factory<Buku>
 */
class BukuFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = Buku::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'judul' => fake()->words(3, true),
            'penulis' => fake()->name(),
            'penerbit' => fake()->randomElement(['Gramedia', 'Erlangga', 'Mizan', 'Andi Offset', 'Informatika Bandung']),
            'tahun_terbit' => fake()->numberBetween(2000, 2025),
            'stok' => fake()->numberBetween(0, 20),
        ];
    }
}